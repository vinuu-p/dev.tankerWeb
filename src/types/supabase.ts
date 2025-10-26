export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      labels: {
        Row: {
          id: string
          created_at: string
          name: string
          color: string
          user_id: string
          is_driver_status: boolean
          is_pinned: boolean
          diesel_average: number
          current_range: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          color: string
          user_id: string
          is_driver_status?: boolean
          is_pinned?: boolean
          diesel_average?: number
          current_range?: number
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          color?: string
          user_id?: string
          is_driver_status?: boolean
          is_pinned?: boolean
          diesel_average?: number
          current_range?: number
        }
      }
      tanker_entries: {
        Row: {
          id: string
          created_at: string
          date: string
          time: string
          cash_amount: number | null
          total_tankers: number | null
          label_id: string
          user_id: string
          driver_status: string | null
          total_km: number | null
          cash_taken: number | null
          notes: string | null
          diesel_added: number
        }
        Insert: {
          id?: string
          created_at?: string
          date: string
          time: string
          cash_amount?: number | null
          total_tankers?: number | null
          label_id: string
          user_id: string
          driver_status?: string | null
          total_km?: number | null
          cash_taken?: number | null
          notes?: string | null
          diesel_added?: number
        }
        Update: {
          id?: string
          created_at?: string
          date?: string
          time?: string
          cash_amount?: number | null
          total_tankers?: number | null
          label_id?: string
          user_id?: string
          driver_status?: string | null
          total_km?: number | null
          cash_taken?: number | null
          notes?: string | null
          diesel_added?: number
        }
      }
    }
  }
}
