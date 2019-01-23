import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TextGroup, palette, theme } from '@behelit/components'
import { CrimsonText, GrayText } from 'components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  background-color: ${theme('xslightgray')};
  border: 1px solid ${palette('silver')};
  border-radius: 5px;
`
const Title = styled(CrimsonText)`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${palette('crimson')};
`

const History = () => (
  <Wrapper>
    <Title size='1.2rem' uppercase weight={700}>Professional History</Title>
    <TextGroup inline={false}>
      <GrayText>
        I started working in France in 2008 for <strong>Scotler</strong>, a Computer Services Company, as a consultant specialising in SharePoint solutions.
        This experience allowed me to gain great experience in SharePoint as well as .NET & front-end development.
        You could say it really began my love affair with tech.
        Most importantly, I worked with customers who weren't tech literate and so forced me to learn how to translate their requirements into software solutions.
      </GrayText>
      <GrayText>
        In 2011, I moved to Hong Kong for a long-term mission.
        <strong>TV5 Monde</strong> a french TV channel, hired me in order to review and renew their entire South Asian web presence.
        The role was very challenging particularly as I was the only software engineer.
        However, I soon successfully produced 4 new multilingual websites based on Kentico .NET.
      </GrayText>
      <GrayText>
        Around the same time, I also started a personal project named <strong>REGIF.NET</strong>, a social network to create and share .GIF pictures.
        The most interesting part was a feature to customize .GIFs.
        Using vanilla javascript, this feature was able to decrypt any GIF file in order to split each frame in a gallery.
        It was then possible to apply pixels transformations on each frame using HTML5 Canvas, and finally re-encrypting everything back into a .GIF format.
      </GrayText>
      <GrayText>
        In 2015, I decided to come back to Europe.
        I moved to the UK and started a new job at <strong>Capital on Tap</strong>, a small but successful FinTech company.
        I had a great time working in and addressing the unique challenges involved in a startup environment.
      </GrayText>
      <GrayText>
        In 2017, I joined the company <strong>Blockchain</strong>, that is providing crypto currencies wallet.
        Currently focused on front-end, I am now working on ReactJS full-time to grow my knowledge and deliver the most scalable and maintainable front-end wallet possible.
      </GrayText>
      <GrayText>
        I decided to continue my self-learning and also help businesses by providing guidance and best practices on various technologies.
      </GrayText>
    </TextGroup>
  </Wrapper>
)

export default History
