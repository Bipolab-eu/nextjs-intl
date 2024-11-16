import React from 'react'

export default async function AboutPage({ params }:any) {
  const { locale } = await params

  return (
    <div>Página About: {locale}</div>
  )
}
