import React from 'react'

type Params = Promise<{ locale: string }>

export default async function AboutPage ({ params } : { params: Params }) {
  const { locale } = await params

  return (
    <div>Página About: {locale}</div>
  )
}
