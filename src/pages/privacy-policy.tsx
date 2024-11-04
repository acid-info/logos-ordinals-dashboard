import { RootPage } from '@/components/RootPage'
import { SEO } from '@/components/SEO'

const content = `# **Logos Operators Dashboard - Website Privacy Policy**

Last updated: 4 November 2024

This Privacy Policy is intended to inform users of our approach to privacy in respect of this website (“**Website**”). In this regard, if you are visiting our Website or interacting with the Website, this Privacy Policy applies to you. 

<br />

## 1. Who we are

For the purposes of this Privacy Policy and the collection and processing of personal data as a controller, the relevant entity is the Logos Collective Association, which has its registered office in Zug and its legal domicile address at

<span style="text-decoration:underline;">Logos Collective Association </span>

c/o PST Consulting GmbH

Baarerstrasse 10

6300 Zug

Switzerland 

Whenever we refer to “Logos”, “we” or other similar references, we are referring to the Logos Collective Association. 

<br />

## 2. We limit the collection and processing of personal data from your use of the Website


We aim to limit the collection and processing of personal data from users of the Website. We only collect and process certain personal data for specific purposes and where we have the legal basis to do so under applicable privacy legislation. We will not collect or process any personal data that we don’t need and where we do store any personal data, we will only store it for the least amount of time needed for the indicated purpose. 


In this regard, the information requested and received by us will be used for, but not limited to:


1. Providing you with access to certain functionalities or features of the Website;
2. The administration of XP that you might receive; and/or
3. Any other action necessary to fulfil our obligations under the Terms of Use and Privacy Policy.


Currently, we collect and process the following personal data from your use of the Website:

1. The user’s wallet address (also known as a wallet address);
2. The XP amount associated with the user’s connected wallet address, which is updated based on specific interactions with the Website;
3. The ‘OP number’ associated with the digital token held by a user’s connected wallet address;
4. Display name, should a user choose to set one.

In respect of the administration of XP (as defined in the Terms of Use), we process various pieces of information related to your activities, some of which may constitute personal data, but could still be used to infer identifying details based on your behaviour. These activities include off-chain interactions. Currently, off-chain activities stored in our database include:


1. Connecting their wallet for the first time;
2. Details of a user’s staking actions performed within the Dashboard;
3. A user making a referral (a short, randomly generated code);
4. Using a referral link from another user.

The aforementioned activities may generate experience points (XP), which are associated with a user’s connected wallet address along with the timestamp and session ID of each activity.

Your personal data will be processed by us in our database as long as it complies with applicable privacy legislation regarding each type of information. We can only use this personal data for any of the purposes described in this privacy policy.

<br />

## 3. Personal data sharing with third party service providers

We may share personal data with third party service providers to support the functionality of the Website. The personal data shared might include your wallet address (such as your Bitcoin wallet address). Such third party service providers act as data processors on our behalf and are only permitted to process personal data in accordance with our instructions and for the purposes specified above.

<br />

## 4. Third party processing of personal data

In addition to our limited collection of personal data, third parties may collect or process personal data as a result of the Website making use of certain features or to provide certain content. To the extent you interact with such third party content or features, their respective privacy policies will apply. 

<br />

## 5. Security measures we take in respect of the Website

As a general approach, we take data security seriously and we have implemented a variety of security measures on the Website to maintain the safety of your personal data when you submit such information to us. 

<br />

## 6. Exporting data outside the European Union and Switzerland

We are obliged to protect the privacy of personal data that you may have submitted in the unlikely event that we export your personal data to places outside the European Union or Switzerland. This means that personal data will only be processed in countries or by parties that provide an adequate level of protection as deemed by Switzerland or the European Commission. Otherwise, we will use other forms of protections, such as specific forms of contractual clauses to ensure such personal data is provided the same protection as required in Switzerland or Europe. In any event, the transmission of personal data outside the European Union and Switzerland will always occur in conformity with applicable privacy legislation. 

<br />

## 7. Your choices and rights

As explained in this Privacy Policy, we limit our collection and processing of your personal data wherever possible. Nonetheless, you still have certain choices and rights in respect of the personal data which we do collect and process. As laid out in relevant privacy legislation, you have the right to:


* Ask us to correct or update your personal data (where reasonably possible);
* Ask us to remove your personal data from our systems;
* Ask us for a copy of your personal data, which may also be transferred to another data controller at your request;
* Withdraw your consent to process your personal data (only if consent was asked for a processing activity), which only affects processing activities that are based on your consent and doesn’t affect the validity of such processing activities before you have withdrawn your consent;
* Object to the processing of your personal data; and
* File a complaint with the Federal Data Protection and Information Commissioner (FDPIC), if you believe that your personal data has been processed unlawfully.

<br />

## 8. Third party links

On this Website, you may come across links to third party websites. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these third party websites. 

<br />

## 9. This Privacy Policy might change

We may modify or replace any part of this Privacy Policy at any time and without notice. Please check the Website periodically for any changes. The new Privacy Policy will be effective immediately upon its posting on our Website. 

<br />

## 10. Contact information

To the extent that you have any questions about the Privacy Policy, please contact us at [legal@free.technology](mailto:legal@free.technology).

This document is licensed under CC-BY-SA.
`

const Page = () => {
  return (
    <>
      <SEO />
      <RootPage content={content} />
    </>
  )
}

export default Page
