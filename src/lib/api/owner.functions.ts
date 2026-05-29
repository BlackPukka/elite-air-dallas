import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getOwnerPassphrase } from "../auth.server";

export const verifyOwnerPassphrase = createServerFn({ method: "POST" })
  .inputValidator(z.object({ passphrase: z.string().min(1).max(200) }))
  .handler(async ({ data }) => {
    const valid = data.passphrase === getOwnerPassphrase();
    return { ok: valid };
  });
