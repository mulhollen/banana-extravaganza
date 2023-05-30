import Image from "next/image"

import { Video, OtherProjects } from "@/components/shared-components"

import { challenge, search, soundSuit, liv_app_2 } from "@/img/ArtInvestigator"

export default function ArtInvestigator() {

  return (
    <div className="app__main--proj">
    <Video video="https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/Art-Investigator-Vid.mp4?alt=media&token=c75b8964-e397-4c69-b8b8-862549f8b109" />                
      <div className="d-flex justify-content-center flex-column port-h1 bodyWidth">
        <h1 className="mt-5 text-center portH1">What do you call an alligator wearing a vest?</h1>
        <h3 className="m-wide">Learn about art + grow emotional intelligence the fun way. Art Investigator is an accompaniment app for The Frist Museum&apos;s <i>Feat.</i> exhibit by Nick Cave. Focusing on building emotional intelligence, interest in art, and creating points of interaction for children ages 7 to 11 and their grown-up.</h3>
      </div>
      <div className="bodyWidth d-flex justify-content-center yellow mb-3 mx-auto flip">
        <div>
          <h3 className="px-5 pt-5">meet evie and michelle.</h3>
          <p className="px-5 py-3">
            Evie is a curious, intelligent, and outgoing second grader with a strong love of the arts. She learns best when she can relate to content. Evie responds well to the addition of technology in static activities; to her, the added tech element makes the experience fun and engaging.
          <br /><br />
            Michelle is a busy mother of two that likes to invest time into cultural activities with her kids on the weekend. She wants her kids to love to learn and strives to make education fun. It’s important for Michelle to create memorable experiences with her kids.
          </p>
        </div>
        <Image className="pl-0 portPic" src={challenge} alt="" />
      </div>
      <div className="bodyWidth px-wide py-5 my-5 border border-dark">
        <div>
          <h3 className="mb-4">the challenge:</h3>
          <p className="px-5 py-3">
            Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br /><br />
            Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
          </p>
        </div>
      </div>
      <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
        <Image className="pl-0 portPic" src={search} alt="" />
        <div>
          <h3 className="px-5 pt-5">user focused goals:</h3>
          <ul className="px-5 py-3">
            <li>Create an engaging and interactive way for the user to experience and understand art.</li>
            <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
            <li>Foster relatability and interactibility for the user to feel like they are a part of the process using relatability as a way to create solid foundations for learning and emotional intelligence.</li>
            <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
            <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
          </ul>
        </div>
      </div>
      <div className="bodyWidth px-wide py-5 my-5 border border-dark">
          <h3 className="mb-4">
          <i>&quot;Olivia CANNOT stop talking about [Art Investigator]. She came into my bed last night and said she was so happy that she saw how someone else faced their fears. We got to have a great conversation about fears and power!&quot;</i>
          </h3>
      </div>
      <div className="bodyWidth d-flex justify-content-center yellow flip mb-3 mx-auto">
        <div>
          <h3 className="px-5 pt-5">the exhibit:</h3>
          <p className="px-5 py-3">
            On first glance <i>Feat.</i> by Nick Cave is delightfully fun and kid accessible. Once you dig deeper, the bright, eclectic art Cave builds, speaks to issues surrounding identity, social justice, specifically race, gun violence, and civic responsibility.
          <br />
          <br />
            Feeling particularly vulnerable after the beating of Rodney King, Cave began unintentionally collecting discarded and forgotten objects and creating soundsuits. Realizing only after the first completion, he had created something that could be worn which would conceal his race, gender, and class. 
          <br />
          <br />
            For me, there was a challenge in taking Cave&apos;s feelings and motivations and sharing them with the user in a way that could help her relate without taking away the creativity and imagination evoked by the exhibit. Cave wants his art to spark viewers’ imaginations and aspirations, and it was important for me to let the app convey that as well. 
          </p>                        
        </div>
        <Image className="pl-0 portPic" src={soundSuit} alt="" />
      </div>
      <div className="bodyWidth px-wide py-5 my-5 border border-dark">
        <div>
          <h3 className="mb-4">the code:</h3>
          <p className="px-5 py-3">
            Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br /><br />
            Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
          </p>
        </div>
      </div>
      <div className="bodyWidth d-flex justify-content-center yellow flip my-3 mx-auto">
        <Image className="pl-0 portPic" src={search} alt="" />
        <div>
          <h3 className="px-5 pt-5">lessons learned:</h3>
          <ul className="px-5 py-3">
            <li>Create an engaging and interactive way for the user to experience and understand art.</li>
            <li>Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
            <li>Foster relatability and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
            <li>Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit.</li>
            <li>Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art.</li>
          </ul>
        </div>
      </div>
      <Image className="w-100 mt-5 h-auto" src={liv_app_2} alt="" />
      <OtherProjects current="ArtInvestigator" />
    </div>
  )
}
