export interface Professional {
  id: string
  name: string
  specialty: string
  location: string
  image?: string
  phone: string
  category: string
  email: string
  social: {
    instagram?: string
    facebook?: string
    linkedin?: string
  }
  schedule?: {
    weekDay: string
    hours: string
  }[]
  weeklySchedule?: {
    day: string
    activities: string
  }[]
  about?: string
  education?: string[]
}

