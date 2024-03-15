import { Box, Card, CardSection, Grid, GridCol, Image, Text, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

export default function Explore() {
  return (
    <Box mx="sm">
        <Title>Explore</Title>
        <Grid m="md">
            <GridCol span="auto">
                <Link href="/origami/1">
                <Card maw={300}>
                    <CardSection>
                        <Image
                        src="https://th.bing.com/th/id/R.3a5f47b3692b3c3ffb365953183d4b68?rik=Bh54yJmU68duWg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ffd%2fOrigami-crane.jpg&ehk=wlevZqFNtNjZWmNu4524ZXTyKGGVWzYgBK4yX1Gqj98%3d&risl=&pid=ImgRaw&r=0"
                        height={160}
                        alt="Norway"
                        />
                    </CardSection>
                    <Text fw={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>
                </Card>
                </Link>
            </GridCol>
            <GridCol span="auto">
                <Card maw={300}>
                    <CardSection>
                        <Image
                        src="https://th.bing.com/th/id/R.3a5f47b3692b3c3ffb365953183d4b68?rik=Bh54yJmU68duWg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ffd%2fOrigami-crane.jpg&ehk=wlevZqFNtNjZWmNu4524ZXTyKGGVWzYgBK4yX1Gqj98%3d&risl=&pid=ImgRaw&r=0"
                        height={160}
                        alt="Norway"
                        />
                    </CardSection>
                    <Text fw={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>
                </Card>
            </GridCol>
            
        </Grid>
    </Box>
  )
}
