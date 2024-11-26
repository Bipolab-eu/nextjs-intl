import React from 'react'

type Params = {
  locale: string
}

export default async function AboutPage({ locale } : Params) {

  return (
    <div>Página About: {locale}</div>
  )
}
