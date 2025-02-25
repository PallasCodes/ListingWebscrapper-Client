import axios from 'axios'

export const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

api.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzNzQ0MmMzLTUxZTEtNGNhNy05ZWYzLTJhYTI2NTc3MTE0MiIsImlhdCI6MTc0MDUyMzk0NywiZXhwIjoxNzQwNTMxMTQ3fQ.KgVnw16Zazx5VLd12fxPspSwj5E5C29Cd_GZPGUacvs`
