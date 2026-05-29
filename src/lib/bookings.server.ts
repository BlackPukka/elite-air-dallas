import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type BookingRecord = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  when: string;
  notes?: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), ".data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

async function readBookings(): Promise<BookingRecord[]> {
  try {
    const raw = await readFile(BOOKINGS_FILE, "utf8");
    return JSON.parse(raw) as BookingRecord[];
  } catch {
    return [];
  }
}

export async function saveBooking(
  input: Omit<BookingRecord, "id" | "createdAt">,
): Promise<BookingRecord> {
  await mkdir(DATA_DIR, { recursive: true });
  const bookings = await readBookings();
  const record: BookingRecord = {
    ...input,
    id: `EA-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  bookings.push(record);
  await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf8");
  return record;
}
