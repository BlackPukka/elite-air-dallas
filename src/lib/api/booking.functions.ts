import process from "node:process";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { saveBooking } from "../bookings.server";

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30),
  email: z
    .string()
    .trim()
    .max(200)
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Invalid email address",
    }),
  service: z.string().trim().min(1).max(80),
  when: z.string().trim().min(1).max(80),
  notes: z.string().trim().max(2000).optional(),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator(bookingSchema)
  .handler(async ({ data }) => {
    const record = await saveBooking({
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      service: data.service,
      when: data.when,
      notes: data.notes || undefined,
    });

    const webhook = process.env.BOOKING_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(record),
        });
      } catch (error) {
        console.error("Booking webhook failed:", error);
      }
    }

    console.info("[booking]", record.id, record.name, record.phone, record.service);

    return {
      ok: true as const,
      confirmationId: record.id,
    };
  });
