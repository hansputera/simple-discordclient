# Simple Discord Bot Client

Mencoba membuat discord bot dengan nodejs.

## Isi
Belum ada apa2 yang banyak, hanya event:

- `newMessage` | Mendapatkan pesan baru dengan 1 parameter yakni hanya `Message`.
- `ready` | Bot lolos autentikasi.
- `closed` | WebSocket terputus dengan 2 parameter yakni `code` (int), dan `reason` (string).
- `invalid_session` | Sesi invalid
- `reconnect` | Event untuk notifikasi akan dilakukannya reconnecting.
- `__dispatchState` | Menghandle event type dispatch yang masuk.

## TODO
- [] Membuat proses agar tahan lama, saat beberapa sekian menit atau detik tidak otomatis keluar.
