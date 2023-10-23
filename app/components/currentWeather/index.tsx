"use client"
import React from 'react'
import Image from 'next/image'

import { useEffect } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import weather from '@/app/api/weather'
import {
  Wrapper, 
  Wrapper2, 
  Today, 
  Forecasts, 
  Card, 
  MiniCard,
  Module,
  Title, 
  Overflow,
  Icone, Temp
} from './../styled-components/Meteo'


function CurrentWeather() {


  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const data = await weather()
      console.log(data)
      if (data) {
        return data.data
      }

    },

  })

  if (isLoading) return 'Chargement...'

  if (error) return "Désolé, une erreur s'est produite: " + error.message



  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const dateWithoutYear: string = date.toLocaleDateString(undefined, options);
    return dateWithoutYear;
  }

  function capitalizeFirstLetter(str: string) {
    if (str.length === 0) return str; // Gérer le cas d'une chaîne vide
    return str[0].toUpperCase() + str.slice(1);
  }

  function speedWindConversion(speed: number) {
    return speed * 3.6
  }




  return (
    <>
      <h1>Coucou</h1>
      <Module>

        <Card>
          <div>
            {data && data.daily?.map((day: { dt: number, humidity: number, temp: { day: number, min: number, max: number }, wind_speed: number, weather: { icon: string, description: string }[] }, index: React.Key) => (
              <div key={`day-${index}`}>
                {index === 0 && (

                  <Wrapper>
                    <Today>

                      <Title>Météo à Levallois-Perret</Title>

                      <p><b> {formatDate(day.dt)}</b></p>
                      <br />
                      <hr></hr>
                      <Temp>{day.temp.day.toFixed(1)}°C</Temp>
                      <p>min. {day.temp.min.toFixed(0)} / max. {day.temp.max.toFixed(0)} °C</p>
                      {day.weather?.map((item2: { icon: string; description: string }, index2: any) => (
                        <div key={`day-${index2}`}>
                          <Wrapper2>
                            <Image
                              src={`https://openweathermap.org/img/wn/${item2.icon}.png`}
                              width={50}
                              height={50}
                              alt="Picture of the weather" />
                            <p>{capitalizeFirstLetter(item2.description)}</p>
                          </Wrapper2>
                        </div>
                      ))}
                      <hr></hr>
                      <br />
                      <p>Vent : {(speedWindConversion(day.wind_speed)).toFixed(0)} km/h </p>
                      <p>Humidité : {day.humidity.toFixed(0)} %</p>
                      <br></br>
                    </Today>

                    <Icone>
                      {day.weather?.map((item2: { icon: string; }, index3: any) => (
                        <div key={`day-${index3}`}>
                          <Image
                            src={`https://openweathermap.org/img/wn/${item2.icon}.png`}
                            width={250}
                            height={250}
                            alt="Picture of the weather" />
                        </div>
                      ))}
                    </Icone>
                  </Wrapper>
                )}
              </div>
            ))}

            <Overflow>
              <Forecasts>
                {data && data.daily?.map((day: { dt: number, humidity: number, temp: { day: number, min: number, max: number }, wind_speed: number, weather: { icon: string, description: string }[] }, index: React.Key) => (

                  <div key={`day-${index}`}>

                    {index !== 0 && (

                      <MiniCard>

                        <p><b> {formatDate(day.dt)}</b></p>
                        {day.weather?.map((item2: { icon: string; description: string }, index2: any) => (
                          <div key={`day-${index2}`}>
                            <Image
                              src={`https://openweathermap.org/img/wn/${item2.icon}.png`}
                              width={100}
                              height={100}
                              alt="Picture of the weather" />
                            <p>{capitalizeFirstLetter(item2.description)}</p>
                          </div>
                        ))}
                        <br />
                        <p>{day.temp.min.toFixed(0)} / {day.temp.max.toFixed(0)} °C</p>

                      </MiniCard>

                    )}
                  </div>

                ))}
              </Forecasts>

            </Overflow>
          </div>

        </Card>

      </Module>
    </>
  )
}

export default CurrentWeather
