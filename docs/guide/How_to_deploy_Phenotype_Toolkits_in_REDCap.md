**Deploying Phenotype Toolkit in REDCap: Implementation Guide**

  -----------------------------------------------------------------------
  Version number:         Version 1.0
  ----------------------- -----------------------------------------------
  Prepared by:            Standard Case Report Forms & REDCap Working
                          Group

  Effective date:         7 March 2025

  Last review date:       5 December 2024

  Applicable to:          Anyone downloading and using the phenotype
                          toolkits in REDCap for building a data
                          collection project

  Enquiries               
  -----------------------------------------------------------------------

**Contents**

[**1. Introduction 3**](#introduction)

> [1.1 Purpose 3](#purpose)
>
> [1.2 Definitions 3](#definitions)
>
> [1.3 Use of the Toolkits 3](#use-of-the-toolkits)
>
> [1.4 What is REDCap? 4](#what-is-redcap)

[**2. Phenotype Toolkits Repository 4**](#phenotype-toolkits-repository)

> [2.1. Toolkit Deployment 4](#toolkit-deployment)

[**3. How to upload the downloaded toolkit file from ZivaHub/Github into
REDCap
8**](#how-to-upload-the-downloaded-toolkit-file-from-zivahubgithub-into-redcap)

[**4. Designing a longitudinal project with Toolkit instruments
10**](#designing-a-longitudinal-project-with-toolkit-instruments)

[**5. Combining multiple field specific toolkits
12**](#combining-multiple-field-specific-toolkits)

> [5.1 Challenges associated working with one or combined toolkits
> 12](#challenges-associated-working-with-one-or-combined-toolkits)
>
> [5.2 Combining toolkits 14](#combining-toolkits)

[**6. Adapting Toolkit instruments for your study whilst maintaining
standardisation
17**](#adapting-toolkit-instruments-for-your-study-whilst-maintaining-standardisation)

> [6.1 Deleting an instrument 17](#deleting-an-instrument)
>
> [6.2 Deleting a field /s 18](#deleting-a-field-s)

[**7. Getting help with REDCap Toolkit deployment
20**](#getting-help-with-redcap-toolkit-deployment)

## Introduction

[In collaboration with the H3Africa Phenotype Harmonisation Working
Group, we established common phenotype-specific data collection toolkits
that can be implemented across the African continent (and beyond). These
toolkits incorporate both existing and newly developed phenotype
standards, to promote harmonised collection of phenotype data for
genomic research.]{.mark}

[The benefits of using these toolkits are multi-fold;]{.mark}

[(1) The toolkits are all aligned with existing, global data collection
standards,]{.mark}

> [(2) the toolkits are specifically adapted for biomedical phenotype
> data collection in Africa, and]{.mark}
>
> [(3) the toolkits are highly interoperable, with variables mapped to
> existing and maintained ontologies.]{.mark}

### 1.1 Purpose {#purpose .unnumbered}

The purpose of this document is to provide step-by-step instructions
(including links to tutorial videos) on how to build a REDCap project
using the phenotype toolkits.

### 1.2 Definitions {#definitions .unnumbered}

instrument - questionnaire / Case Report Form / data collection form

GitHub - a cloud-based platform where you can store, share, and work
together with others to write code. Storing your code in a
\"repository\" on GitHub allows you to: Showcase or share your work.
Track and manage changes to your code over time.

phenotype - The observable characteristics or traits in an individual
based on the expression of their genes. The phenotype is determined by
the individual\'s genotype and possibly influenced by other factors,
such as environmental factors or other genetic modifiers.

toolkit - collection of data collection instruments focused on a
particular field of interest

ZivaHub - is an online, institutional data repository that serves as a
publishing and access platform to research data and scholarly outputs.
It is powered by [Figshare for Institutions](http://www.figshare.com/)
and is available to all students and staff at UCT. Ziva is the Shona
word for knowledge.

### 1.3 Use of the Toolkits {#use-of-the-toolkits .unnumbered}

If you choose to make use of these toolkits and instruments, we welcome
feedback and queries that can be directed here:
[[https://github.com/AfriGen-D/Phenotype_Collection_Toolkits]{.underline}](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits)
or
[[https://helpdesk.afrigen-d.org/helpdesk/]{.underline}](https://helpdesk.afrigen-d.org/helpdesk/)

We also ask that you please reference and cite our work in your
publications in order to promote the benefits of using standardised data
collection instruments using the following:

*In the methods section of publications:*

> \"The data collection toolkits (DOI) used were developed by
> H3ABioNet/H3Africa and were compiled using a variety of resources
> described in
> [[https://GitHub.com/h3abionet/h3aphenstds]{.underline}](https://github.com/h3abionet/h3aphenstds)
> and, from 2024 onwards,
> [[https://github.com/AfriGen-D/Phenotype_Collection_Toolkits]{.underline}](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits)."

*In the acknowledgements section:*

> \"We acknowledge the use of data collection toolkits (DOI) from
> H3ABioNet/H3Africa which can be found, including associated
> references, at
> [[https://GitHub.com/h3abionet]{.underline}](https://github.com/h3abionet),
> funded by the H3Africa NIH grant U24HG006941.\"

*In the references section:*

> Lyndon Zass, Katherine Johnston, Alia Benkahla, Melek Chaouch, Judit
> Kumuthini, Fouzia Radouani, Liberata Alexander Mwita, Nihad Alsayed,
> Taryn Allie, Dassen Sathan, Upendo Masamu, Milaine Sergine Seuneu
> Tchamga, Tsaone Tamuhla, Chaimae Samtal, Victoria Nembaware, Zoe Gill,
> Samah Ahmed, Yosr Hamdi, Faisal Fadlelmola, Nicki Tiffin, Nicola
> Mulder; "Developing Clinical Phenotype Data Collection Standards for
> Research in Africa";
> [[https://doi.org/10.1155/2023/6693323]{.underline}](https://doi.org/10.1155/2023/6693323)

### 1.4 What is REDCap? {#what-is-redcap .unnumbered}

REDCap is a web-based application for building and managing surveys and
databases, enabling secure data collection both online and offline.
Developed at Vanderbilt University in the United States, Project REDCap
([[https://www.project-redcap.org/]{.underline}](https://www.project-redcap.org/))
is an open source data collection platform created and continually
upgraded thanks to a small REDCap software and development team at
Vanderbilt. REDCap is now used all over the world in many countries and
institutions, free of charge for non-profit organisations and is an easy
to use, efficient data collection system. REDCap was originally
developed for the collection of clinical research data via online
surveys but is used and applied in many different settings and data
collection scenarios, though it is still primarily for clinical research
data collection.

## 2. Phenotype Toolkits Repository {#phenotype-toolkits-repository .unnumbered}

A list of the latest version of the H3Africa phenotype toolkits can be
accessed on the H3ABioNet GitHub repository. The repository provides
links to additional information about the development of the toolkits,
domains of data collection and related publication/s. It is a publicly
accessible repository which means anyone can have access to the content
without any restrictions of passwords or usernames. The GitHub
repository provides a space to log issues that users may have with
regards to the toolkits and additional links for contacts and support
are provided at the end of this documentation.

### 2.1. Toolkit Deployment {#toolkit-deployment .unnumbered}

To access the Phenotype Toolkits GitHub repository go to the URL
[[https://GitHub.com/h3abionet/h3aphenstds/tree/main]{.underline}](https://github.com/h3abionet/h3aphenstds/tree/main)
and the repository will open showing a list of all the toolkits ready
for downloads.

![](media/image2.png){width="5.217518591426072in"
height="2.641732283464567in"}

The user can then select and download one or more toolkits (from the
list highlighted in red) that they wish to use to build a REDCap
research data collection project.

[These toolkits incorporate both existing and newly developed phenotype
standards, to promote harmonised collection of phenotype data for
genomic research. The benefits of using these toolkits are multi-fold;
(1) The toolkits are all aligned with existing, global data collection
standards, (2) the toolkits are specifically adapted for biomedical
phenotype data collection in Africa, and (3) the toolkits are highly
interoperable, with variables mapped to existing and maintained
ontologies.]{.mark}

To successfully deploy the toolkit one must first download the toolkit
from GitHub or ZivaHub and then upload it to a REDCap project as an XML
file. The example below is a demonstration of how to download a Core
Phenotype toolkit from the GitHub repository. To download from the
GitHub repository follow the steps below:

**2.2.1 Example - How to download Core Phenotype Toolkit v2.0 from
GitHub**

**Open this link** [[GitHub -
h3abionet/h3aphenstds]{.underline}](https://github.com/h3abionet/h3aphenstds/tree/main)

![](media/image71.png){width="3.611111111111111in"
height="1.5486111111111112in"}

![](media/image112.png){width="4.579861111111111in" height="2.3625in"}

![](media/image103.png){width="4.488194444444445in"
height="1.9916666666666667in"}

![](media/image101.png){width="3.0368055555555555in" height="1.025in"}

**2.2.2 Example - How to download Core Phenotype Toolkit v2.0 from
ZivaHub**

The example below is a demonstration of how to download a Core Phenotype
toolkit from the ZivaHub repository. To download from the GitHub
repository follow the steps below:

**Open this link :** [[H3Africa PHWG Data Collection Toolkit - Core
Phenotypes v2.0
(uct.ac.za)]{.underline}](https://zivahub.uct.ac.za/articles/standard/H3Africa_PHWG_Data_Collection_Toolkit_-_Core_Phenotypes_v2_0/21152731)
\`

![](media/image107.png){width="4.291666666666667in"
height="2.9027777777777777in"}

![](media/image106.png){width="4.245138888888889in"
height="3.171527777777778in"}

![](media/image110.png){width="2.8916666666666666in"
height="1.4416666666666667in"}

## 3. How to upload the downloaded toolkit file from ZivaHub/Github into REDCap {#how-to-upload-the-downloaded-toolkit-file-from-zivahubgithub-into-redcap .unnumbered}

The downloaded XML files must be uploaded as a new project in REDCap.
Assuming you have successfully logged in REDCap and you can see the home
page below, click New Project button.

![](media/image105.png){width="5.354166666666667in"
height="2.0729166666666665in"}

![](media/image120.png){width="5.057292213473316in" height="2.8125in"}

![](media/image108.png){width="4.116666666666666in" height="1.175in"}

![](media/image114.png){width="4.803472222222222in"
height="2.6798611111111112in"}

![](media/image117.png){width="5.196527777777778in"
height="2.0722222222222224in"}

![](media/image129.png){width="4.960416666666666in"
height="2.5631944444444446in"}

## 4. Designing a longitudinal project with Toolkit instruments {#designing-a-longitudinal-project-with-toolkit-instruments .unnumbered}

[Once your REDCap project is created, you will be configuring your
project and creating instruments to use during data collection. REDCap
is very customizable and can be used for various use cases, we will only
touch on the basics of designing and configuring a REDCap project here.
Longitudinal projects allow for the collection of data over time with
the ability to track changes and progress. Longitudinal instruments
eliminate the need to recreate multiple of the same forms, where instead
the form is created once and assigned to multiple time points within a
project. Some useful situations for longitudinal projects
include:]{.mark}

-   [Long term studies]{.mark}

-   [Clinical trials]{.mark}

-   [Recruitment and enrollment combinations]{.mark}

-   [Multi-site studies]{.mark}

-   [Repeating surveys (medications, lab results, adverse events
    > forms)]{.mark}

[The following example is a step-by-step for longitudinal
projects:]{.mark}

[Navigate to your project, and select the "Project Setup" tab on the
home page.]{.mark}

![](media/image37.png){width="4.973958880139983in"
height="1.3645833333333333in"}

[The second step is to click the "Enable" button under the "Main project
settings". The Enable button is next to "Use longitudinal data
collection with defined events"]{.mark}

![](media/image4.png){width="4.65625in" height="1.041910542432196in"}

[The third step is to define Events / Arms for the project. On the
"Project Setup" click "Define My Events"]{.mark}

![](media/image38.png){width="4.661458880139983in"
height="1.2604166666666667in"}

[Type the name of the event in the text box, then click "Add New Event"
Repeat this step for each event as needed]{.mark}

![](media/image60.png){width="5.072916666666667in"
height="1.8292235345581802in"}

[The fourth step is to link instruments to events. On the "Project
Setup" click Designate Instruments for My Events" button and begin
editing.]{.mark}

![](media/image13.png){width="5.767716535433071in"
height="1.3055555555555556in"}

[Select "Begin Editing" from the screenshot below.]{.mark}

![](media/image3.png){width="5.767716535433071in"
height="3.138888888888889in"}

Check the data collection instrument that should be assigned to each
specific event. After selecting, click "Save".

![](media/image61.png){width="4.369792213473316in"
height="2.3854166666666665in"}

## 5. Combining multiple field specific toolkits {#combining-multiple-field-specific-toolkits .unnumbered}

This section explains how users can combine data collection instruments
from multiple field specific toolkits by selecting and downloading the
individual instruments from GitHub and importing them into a REDCap
project.

### 5.1 Challenges associated working with one or combined toolkits {#challenges-associated-working-with-one-or-combined-toolkits .unnumbered}

-   The user might download a toolkit with some fields not necessary for
    > the study.

-   The user might download a toolkit with some individual toolkits not
    > necessary for the study.

-   The user might want to collect data which is not included in the
    > toolkit

-   The user might fail to import a toolkit in REDCap

-   

**Example:** With an established Core Phenotypes project in REDCap, if
you are a researcher looking at tuberculosis and environmental factors,
you would take individual instruments from the Environmental Impact
Toolkit and Infectious Diseases Toolkit.

The following example will you a step by step example on how to explore
a toolkit and how to download single instruments and upload to an
established REDCap study

**Open this link** [[GitHub -
h3abionet/h3aphenstds]{.underline}](https://github.com/h3abionet/h3aphenstds/tree/main)

![](media/image71.png){width="3.611111111111111in"
height="1.5486111111111112in"}

Take the environmental toolkit (it includes Core Phenotypes)

![](media/image39.png){width="4.348958880139983in"
height="2.1666666666666665in"}

![](media/image48.png){width="4.437354549431321in" height="2.59375in"}

Assuming the user is combining two toolkits, repeat steps 1 - 4 to
download the second toolkit.

### 5.2 Combining toolkits {#combining-toolkits .unnumbered}

The following example shows how to combine two individual instruments
and upload to a REDCap project. For this example we use the downloaded
Environmental Exposures Toolkit and the Tuberculosis Sign and Symptoms
zip files.

![](media/image105.png){width="4.605505249343832in" height="1.9375in"}

![](media/image1.png){width="4.609971566054243in" height="2.21875in"}

![](media/image62.png){width="5.25in" height="2.3802088801399823in"}

After successfully creating the project and the instruments are listed
under the instrument name list, the user needs to upload the second
downloaded tuberculosis instrument zip file.

![](media/image49.png){width="5.177165354330708in"
height="1.229825021872266in"}

![](media/image50.png){width="5.235929571303587in"
height="3.5078740157480315in"}

![](media/image45.png){width="5.000022965879265in"
height="3.3346456692913384in"}

A pop-up window will open showing that the ZIP file was successfully
uploaded.

![](media/image56.png){width="5.213542213473316in"
height="3.4361975065616797in"}

![](media/image20.png){width="5.088978565179352in"
height="1.9956780402449694in"}

## 6. Adapting Toolkit instruments for your study whilst maintaining standardisation {#adapting-toolkit-instruments-for-your-study-whilst-maintaining-standardisation .unnumbered}

This section demonstrates how to modify instruments, add new fields or
questions and what to be careful of to not impact the standard in
REDCap. This following is a step-by-step example on how to delete an
entire instrument from your project.

### 6.1 Deleting an instrument {#deleting-an-instrument .unnumbered}

The user can delete the entire instrument from a project if they do not
want the information to be included in their study. It is important to
remember that this action will delete all the data capturing fields in
that instrument. To delete the entire instrument from the instruments
list, the user follow the steps below:

![](media/image29.png){width="5.223958880139983in"
height="2.7963538932633423in"}

A pop-up window will appear prompting the user to Rename, Copy, Delete
or Download Instrument ZIP. The user can choose any of the options
available, but this example is for deleting an instrument.

![](media/image63.png){width="5.231101268591426in"
height="1.0208333333333333in"}

![](media/image109.png){width="5.083846237970254in"
height="1.90873687664042in"}

![](media/image64.png){width="5.083333333333333in"
height="2.151042213473316in"}

### 6.2 Deleting a field /s {#deleting-a-field-s .unnumbered}

The user may decide to delete certain fields on an instrument depending
on what fields they need to use in a study. The following is a
stp-by-step guide on how to delete fields in REDCap. This example shows
how to delete a field under demographics core instrument.

![](media/image29.png){width="4.895833333333333in"
height="2.4153466754155732in"}

The instrument will open showing all the fields within that instrument.
For this example, we are deleting the " native language field".

![](media/image5.png){width="4.671875546806649in"
height="2.3854166666666665in"}

A pop-up window will appear prompting the user to confirm the deletion.
Click the "delete" to confirm the action.

![](media/image14.png){width="5.098958880139983in" height="1.84375in"}

![](media/image80.png){width="5.109375546806649in" height="3.125in"}

## 7. Getting help with REDCap Toolkit deployment {#getting-help-with-redcap-toolkit-deployment .unnumbered}

Getting help on how to deploy the toolkit, always refer to the
implementation guide using this link [[GitHub -
h3abionet/h3aphenstds]{.underline}](https://github.com/h3abionet/h3aphenstds/tree/main).
You may also get in touch with the AfriGen-D using the following email
address
