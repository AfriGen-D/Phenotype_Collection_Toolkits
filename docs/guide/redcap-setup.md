---
outline: [2, 3]
---

# REDCap Implementation Guide

*Deploying the H3A Phenotype Toolkits in REDCap*

| Toolkits Version number: | Version 3.1                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| Prepared by:             | Standard Case Report Forms & REDCap Working Group                                                    |
| Effective date:          | 20 April 2026                                                                                        |
| Last review date:        | 3 October 2026                                                                                       |
| Applicable to:           | Anyone downloading and using the phenotype toolkits in REDCap for building a data collection project |
| Enquiries                | [https://helpdesk.afrigen-d.org/helpdesk/](https://helpdesk.afrigen-d.org/helpdesk/)          |

## Toolkits stewardship and Version 3.0 context

The phenotype data collection toolkits described in this guide were originally developed under the H3Africa and H3ABioNet initiatives. The historical development, scientific rationale, and referenced publications remain valid and applicable and early development under H3ABioNet remains accessible via the original H3ABioNet GitHub repositories for reference purposes.

From Version 3.0 onwards, the continued development, maintenance, and release of these toolkits is coordinated by the **African Genomics Data Hub (AfriGen-D)** [www.afrigen-d.org](https://afrigen-d.org/), with ongoing involvement from several members of the original development team.

While the original H3ABioNet GitHub repository remains publicly accessible for historical reference, **all new development, updates, and releases are now maintained in the AfriGen-D repository**: [https://github.com/AfriGen-D/Phenotype_Collection_Toolkits](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits)

Users implementing Version 3.0 or later should always refer to the AfriGen-D repository to ensure they are using the most current and supported toolkit versions.

## Purpose

The purpose of this document is to provide step-by-step instructions (including links to tutorial videos) on how to deploy the phenotype toolkits to build a REDCap project for collecting research data.

## Definitions

**AfriGen-D** - African Genomics Data Hub

**instrument** - questionnaire / Case Report Form / data collection form

**GitHub** - a cloud-based platform where you can store, share, and work together with others to write code. Storing your code in a "repository" on GitHub allows you to: Showcase or share your work. Track and manage changes to your code over time.

**phenotype** - The observable characteristics or traits in an individual based on the expression of their genes. The phenotype is determined by the individual's genotype and possibly influenced by other factors, such as environmental factors or other genetic modifiers.

**toolkit** - collection of data collection instruments focused on a particular field of interest

**ZivaHub** - is an online, institutional data repository that serves as a publishing and access platform to research data and scholarly outputs. It is powered by [Figshare for Institutions](http://www.figshare.com/) and is available to all students and staff at UCT. Ziva is the Shona word for knowledge.

## Acknowledging use of the toolkits

One of the ways we can track the usefulness of these toolkits is to identify users of the toolkits through publications that cite our toolkits. This is especially helpful for continued improvement of the toolkits, boosting adoption by others and understanding user needs. We hope that these toolkits are valuable and useful enough to warrant your recognition.

If you choose to make use of these toolkits and instruments, we welcome feedback and queries via the **AfriGen-D Helpdesk**: [https://helpdesk.afrigen-d.org/helpdesk/](https://helpdesk.afrigen-d.org/helpdesk/) . We also would love to hear from you through comments on our “Community” section and/or logging any problems you encounter under “Issues” on the GitHub repository.

Here are some ways you can include us in your publication/s:

***In the methods section of publications:***

"The data collection toolkits ([DOI](https://doi.org/10.25375/uct.21152731.v1)) used were originally developed by H3ABioNet/H3Africa and compiled using a variety of resources described in [https://GitHub.com/h3abionet/h3aphenstds](https://github.com/h3abionet/h3aphenstds) and, from 2024 onwards, further developed under AfriGen-D [https://github.com/AfriGen-D/Phenotype_Collection_Toolkits](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits).”

***In the acknowledgements section:***

*Toolkit usage from 2020–2024:*

"We acknowledge the use of data collection toolkits ([DOI](https://doi.org/10.25375/uct.21152731.v1)) from H3ABioNet/H3Africa which can be found, including associated references, at [https://github.com/h3abionet/h3aphenstds](https://github.com/h3abionet/h3aphenstds), funded by the H3Africa NIH grant U24HG006941."

*Toolkit usage from 2024–present:*

"We acknowledge the use of data collection toolkits ([DOI](https://doi.org/10.25375/uct.21152731.v1)) from AfriGen-D which can be found, including associated references, at <https://github.com/AfriGen-D/Phenotype_Collection_Toolkits>, funded by the NIH grant U24HG012750."

***In the references section:***

“Lyndon Zass, Katherine Johnston, Alia Benkahla, Melek Chaouch, Judit Kumuthini, Fouzia Radouani, Liberata Alexander Mwita, Nihad Alsayed, Taryn Allie, Dassen Sathan, Upendo Masamu, Milaine Sergine Seuneu Tchamga, Tsaone Tamuhla, Chaimae Samtal, Victoria Nembaware, Zoe Gill, Samah Ahmed, Yosr Hamdi, Faisal Fadlelmola, Nicki Tiffin, Nicola Mulder; “Developing Clinical Phenotype Data Collection Standards for Research in Africa”; [https://doi.org/10.1155/2023/6693323](https://doi.org/10.1155/2023/6693323).”

## 1. Introduction

The AfriGen-D CRF Standards & REDCap Working Group supports the ongoing evolution, governance, and dissemination of the phenotype toolkits originally developed by the H3Africa and H3ABioNet Phenotype Harmonisation Working Group.

The toolkits offer standardised data collection protocols for researchers in the genomic and health field (particularly in the African continent). The toolkits enable swift spin up of clinical data collection databases through provision of REDCap .xml files or data dictionaries for other software platforms, helping ensure that essential data variables are collected in a standardised manner.

The benefits of using these toolkits are multi-fold;

(1) the toolkits are aligned with existing, global data collection standards ([PhenX](https://www.phenxtoolkit.org/index.php)).

> (2) the toolkits are specifically adapted for biomedical phenotype data collection in Africa.
>
> (3) the toolkits are highly interoperable, with variables annotated with existing and maintained ontologies.
>
> (4) the toolkits are being actively translated into commonly used African languages.

### 1.1 What is REDCap?

> REDCap is a web-based application for building and managing surveys and databases, enabling secure data collection both online and offline. Developed at Vanderbilt University in the United States, Project REDCap ([https://www.project-redcap.org/](https://www.project-redcap.org/)) is an open source data collection platform created and continually upgraded thanks to a small REDCap software and development team at Vanderbilt. REDCap is now used all over the world in many countries and institutions, free of charge for non-profit organisations and is an easy to use, efficient data collection system. REDCap was originally developed for the collection of clinical research data via online surveys but is used and applied in many different settings and data collection scenarios, though it is still primarily for clinical research data collection.

If you do not have access to a REDCap instance to build a project, you will not be able to deploy the REDCap .xml files to create a data collection project. You will be able to open and view the instrument .pdf files and you will also be able to see and download the codebook / data dictionary .csv file which describes the variables for data collection.

*Note: These data dictionary files can be used to setup a data collection database in any other database platform but it will not provide the swift setup you can achieve with the REDCap platform.*

## 2. Find the phenotype toolkits

The phenotype data collection toolkits have evolved over multiple development phases. As a result, more than one public repository exists.

#### AfriGen-D Phenotype Toolkits Repository (current and actively maintained)

From Version 3.0 onwards, the primary and authoritative repository for all phenotype toolkits is maintained by the African Genomics Data Hub (AfriGen-D):

[https://github.com/AfriGen-D/Phenotype_Collection_Toolkits](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits)

This repository contains:

- the latest released toolkit versions,

- all ongoing development and issue tracking,

- updated documentation and deployment files.

Visit the GitHub repository to download the latest version of the toolkits and related documentation. Users are encouraged to log issues on the repository and can also sign up to the mailing list for the toolkits via a link in the ReadMe.

### 2.1 Select a Toolkit to deploy

In the repository Code you will see a list of all the toolkits and by clicking on any of the Toolkit folders you can view the toolkit files to download.

![Screenshot](/images/redcap-guide/image63.png)

The All-In-One toolkit includes all the Core and Domain Specific toolkits bundled together and is a good option for researchers who want to work from a project containing all the data collection instruments. Removing any instruments not needed is much easier than importing individual instruments from other toolkits (particularly if utilizing translated instruments), so this may be a really good starting point.

Alternatively, researchers can select any of the toolkits to use with a domain specific focus. The Core Phenotype toolkit includes phenotype data collection variables that are commonly collected by many research projects conducted across the African continent, in various disease fields. It includes information related to a participant’s demographics, anthropometrics, tobacco and alcohol use, and disease history. It will give a set of basic essential variables for any researchers in the field - a minimal dataset. All the domain specific toolkits have the Core Phenotype toolkit incorporated in their setup.

E.g. A research study on environmental factors affecting human health may prioritise the Environmental Exposures Toolkit as a starting point and using this toolkit they will get both the core phenotypes instruments bundled with environmental exposures instruments.

Once the researcher has selected a toolkit they can then follow the instructions below to download and deploy a new REDCap project.

### 2.2 Download a Toolkit

To successfully deploy a toolkit one must download the toolkit from GitHub and then upload it to a REDCap project as an XML file. The options below detail four different ways to download the Core Phenotype toolkit from the GitHub repository:

**Option 1: Download the whole repository as a ZIP folder** (good for users unfamiliar with Git)

Click the green Code button on the repo page → Download ZIP → extract all → open only the toolkit folder/s you need.

(the toolkits repository is less than 100MB so this should not be too problematic.)

![Screenshot](/images/redcap-guide/image80.png)

**Option 2: Do a Sparse checkout with Git Bash** (good for users with Git experience)

If you are comfortable with Git Bash commands, this is a good option for pulling a toolkit folder of your choice into your local folder, not the whole repo. E.g. Copy and paste the following commands in Git Bash:

```bash
git clone --filter=blob:none --no-checkout https://github.com/AfriGen-D/Phenotype_Collection_Toolkits.git
cd Phenotype_Collection_Toolkits
git sparse-checkout init --cone
git sparse-checkout set "Cardiovascular Diseases Toolkit v3.0"
git checkout main
```

Replace `"Cardiovascular Diseases Toolkit v3.0"` with the exact name of the toolkit folder you want, keeping the quotation marks because the folder names contain spaces.

**Option 3: Download a single file from the repository**

Click on the toolkit in the Code list, e.g. the highlighted red box:

![Screenshot](/images/redcap-guide/image73.png)

Click on the REDCap .xml file in that toolkit, this will open up the code of the .xml file.

![Screenshot](/images/redcap-guide/image68.png)

After opening the file code, click on the download icon and the file will be downloaded to the folder of your choice.

![Screenshot](/images/redcap-guide/image67.png)

E.g.

![Screenshot](/images/redcap-guide/image85.png)

**Option 4: Clone the GitHub repository**

Alternatively you can simply clone the full repo to your local machine and you will have the latest updated files available to use.

Set up a local folder on your machine for the repository, then open a terminal (Git Bash on Windows) in that folder and run:

```bash
git clone https://github.com/AfriGen-D/Phenotype_Collection_Toolkits.git
```

To get the latest updates later, run `git pull` inside the folder.

![Screenshot](/images/redcap-guide/image77.png)

## 3. Set up a REDCap project with a Toolkit

The downloaded XML files must be uploaded as a new project in REDCap. Assuming you have successfully logged in REDCap and you can see the home page below, click New Project button.

![Screenshot](/images/redcap-guide/image48.png)

Create your new project with the option to Upload a REDCap project XML, you will be prompted to select a file and can choose the toolkit .xml file and Create Project.

![Screenshot](/images/redcap-guide/image83.png)

The new REDCap project has been created and is ready to be accessed. To view the project’s instruments, click Designer

![Screenshot](/images/redcap-guide/image88.png)

![Screenshot](/images/redcap-guide/image78.png)

## 4. Toolkit Translations

Due to the inclusion of multiple languages in our toolkits and ongoing improvement in the REDCap software to implement multiple languages, there may be some settings that need to be implemented depending on both your instance’s global settings (you will need to check with your REDCap Administrator if this feature has been turned on for the instance overall), and whether or not you want to make use of the multi-language features.

Version 3.0+ of the toolkits has included a French translation of all the data collection instruments - if you would like to learn more about how translations are incorporated into REDCap projects through the Multi-Language Management you can view the official REDCap guideline: [https://redcap.h3abionet.org/redcap/redcap_v17.0.1//Resources/misc/mlm-guide.pdf](https://redcap.h3abionet.org/redcap/redcap_v17.0.1//Resources/misc/mlm-guide.pdf) and also watch the training video: [https://redcap.vumc.org/consortium/videoplayer.php?video=mlm01.mp4&title=Multi-Language%20Management&referer=redcap.h3abionet.org](https://redcap.vumc.org/consortium/videoplayer.php?video=mlm01.mp4&title=Multi-Language%20Management&referer=redcap.h3abionet.org).

If you would like to know more about the translation of the toolkits and validation processes used, you can refer to our Translations web page.

::: info Coming soon
The Translations web page is under development.
:::

### 4.1 Where can I find the translations?

Translated versions of the instruments are included as .pdf files in the toolkits along with translated guidelines. For Version 3.0+ these are denoted with a Fr at the end of the files for French versions.

![Screenshot](/images/redcap-guide/image47.png)

Contained within the REDCap .xml files you can also export the language settings from the multi-language management application to extract all translated content of the instruments. **Note**: if you do not have access to REDCap and want to obtain a copy of the translated fields for the data dictionaries, you can make a request via the AfriGen-D helpdesk.

![Screenshot](/images/redcap-guide/image12.png)

### 4.2 Turning off languages

If you do not want to have multiple languages available or you only want certain languages available, you can go to the Multi-language Management application and untick the green active option e.g.

![Screenshot](/images/redcap-guide/image19.png)

### 4.3 Using the available languages

The toolkits have been translated for data capturers and survey entry and some user interface elements. Available languages are automatically included as active and as such, when you go to add data via a data entry form, users will be offered a drop down menu at the top right of the form to select language of choice which will seamlessly toggle the fields to another language:

![Screenshot](/images/redcap-guide/image9.png)

Equally, if data is captured via a survey, the same feature exists on the survey webpage, users have to click on the English first and this will reveal the language options on the left above the survey fields:

![Screenshot](/images/redcap-guide/image5.png)

## 5. Designing a longitudinal project with Toolkit instruments

Once your REDCap project is created you will be configuring your project and may also be creating instruments to use during data collection. REDCap is very customizable and can be used for various use cases, we will only touch on the basics of designing and configuring a REDCap project here.

Longitudinal projects allow for the collection of data over time with the ability to track changes and progress. Longitudinal instruments eliminate the need to recreate multiple of the same forms, where instead the form is created once and assigned to multiple time points within a project. Some useful situations for longitudinal projects include:

- Long term studies

- Clinical trials

- Recruitment and enrollment combinations

- Multi-site studies

- Repeating surveys (medications, lab results, adverse events forms)

It is important to note that all the toolkit instruments have been set up in the toolkits as once off data collection tools. This is not to say that they cannot be adapted for longitudinal data collection and in fact depending on the participants and type of study and data elements being collected some may very well warrant adaptation. When this is the case, it is important to simply retain the ontology mappings and variable labels and names as much as possible to keep the benefits of standardised and machine recognisable data elements.

E.g. the Anthropometrics form might be utilised longitudinally for paediatric participants; only collected once for adults who are no longer growing; or you may wish to split sections out depending on what will be measure over time versus once off in your study.

Below is a non-exclusive list of the instruments that may contain data elements commonly collected in longitudinal studies, wherever possible we tried to group longitudinal data elements into separate instruments from the cross-sectional data elements:

- Anthropometrics Core (for paediatric participants, some elements for adults e.g. weight)

- Blood Pressure Core

- Urine Results Core

- HIV Testing Core

- Vaccinations Core (for paediatric participants)

- Current Pregnancy Status

- Malaria Signs and Symptoms

- Malaria Testing

- Trypanosomiasis Signs and Symptoms

- Trypanosomiasis / Sleeping Sickness

- Tuberculosis Signs and Symptoms

- Tuberculosis Testing

- Current Tuberculosis

- STD Signs and Symptoms

- HIV Signs and Symptoms

- HIV Detection

- CD4 Measurement

- HIV Viral Load

- HIV Blood Count

- Liver Function Assay

- Cardiac Blood Flow Measurements

- Cardiovascular Disease Blood Biomarkers

- Diet

- Kidney Function Assay

- Complete Blood Cell Count

- Medication Log Core (this might be used as a repeating form to log multiple medications)

- Cancer Family History Prognosis (this might be used as a repeating form to log multiple family members histories)

### 5.1 Create a longitudinal study

Navigate to your project, and select the “Project Setup” tab on the home page:

![Screenshot](/images/redcap-guide/image82.png)

The second step is to click the “Enable” button under the “Main project settings”. The Enable button is next to “Use longitudinal data collection with defined events”:

![Screenshot](/images/redcap-guide/image79.png)

The third step is to define Events / Arms for the project. On the “Project Setup” click “Define My Events”:

![Screenshot](/images/redcap-guide/image84.png)

Type the name of the event in the text box, then click “Add New Event” Repeat this step for each event as needed:

![Screenshot](/images/redcap-guide/image81.png)

The fourth step is to link instruments to events. On the “Project Setup” click Designate Instruments for My Events” button and begin editing:

![Screenshot](/images/redcap-guide/image89.png)

Select “Begin Editing” from the screenshot below:

![Screenshot](/images/redcap-guide/image86.png)

Check the data collection instrument that should be assigned to each specific event. After selecting, click “Save”:

![Screenshot](/images/redcap-guide/image91.png)

When you have set up your longitudinal project, you need to go through your instruments and data elements with a fine tooth comb to ensure that data collection flow will work smoothly and in alignment with your protocol needs. The toolkits can be modified and edited to fit your project but we would recommend that you retain the descriptions, ontology codes linked and variable names given in the toolkits in order to preserve the benefits of standardisation for downstream harmonisation.

## 6. Combining multiple field specific toolkits

::: warning Section being updated
Individual instrument ZIP files are currently only available for the Version 2.0 toolkits, in the [Archived folder](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits/tree/main/Archived) of the repository. This section will be updated for Version 3.0.
:::

This section explains how users can combine data collection instruments from multiple field specific toolkits by selecting and downloading the individual instruments from GitHub and importing them into a REDCap project.

### 6.1 Why choose only some toolkits?

- The user might download a toolkit with some fields not necessary for the study.

- The user might download a toolkit with some individual toolkits not necessary for the study.

- The user might want to collect data which is not included in the toolkit

- The user might fail to import a toolkit in REDCap

**Example:** With an established Core Phenotypes project in REDCap, if you are a researcher looking at tuberculosis and environmental factors, you would take individual instruments from the Environmental Exposures Toolkit and Infectious Diseases Toolkit.

The following is a step-by-step example of how to explore a toolkit and how to download single instruments and upload to an established REDCap study

**Open this link:** <https://github.com/AfriGen-D/Phenotype_Collection_Toolkits>

![Screenshot](/images/redcap-guide/image46.png)

Take the environmental toolkit (it includes Core Phenotypes)

![Screenshot](/images/redcap-guide/image60.png)

![Screenshot](/images/redcap-guide/image62.png)

Assuming the user is combining two toolkits, repeat these steps to download the second toolkit.

### 6.2 Combining toolkits

The following example shows how to combine two individual instruments and upload to a REDCap project. For this example we use the downloaded Environmental Exposures Toolkit and the Tuberculosis Sign and Symptoms zip files.

![Screenshot](/images/redcap-guide/image48.png)

![Screenshot](/images/redcap-guide/image50.png)

![Screenshot](/images/redcap-guide/image53.png)

After successfully creating the project and the instruments are listed under the instrument name list, the user needs to upload the second downloaded tuberculosis instrument zip file.

![Screenshot](/images/redcap-guide/image56.png)

![Screenshot](/images/redcap-guide/image57.png)

![Screenshot](/images/redcap-guide/image59.png)

A pop-up window will open showing that the ZIP file was successfully uploaded.

![Screenshot](/images/redcap-guide/image58.png)

![Screenshot](/images/redcap-guide/image61.png)

## 7. Adapting instruments for your study

This section demonstrates how to modify instruments, add new fields or questions and what to be careful of to not impact the standard in REDCap. This following is a step-by-step example on how to delete an entire instrument from your project.

### 7.1 Deleting an instrument

The user can delete the entire instrument from a project if they do not want the information to be included in their study. It is important to remember that this action will delete all the data capturing fields in that instrument. To delete the entire instrument from the instruments list, the user follows the steps below:

![Screenshot](/images/redcap-guide/image1.png)

A pop-up window will appear prompting the user to Rename, Copy, Delete or Download Instrument ZIP. The user can choose any of the options available, but this example is for deleting an instrument.

![Screenshot](/images/redcap-guide/image6.png)

![Screenshot](/images/redcap-guide/image2.png)

![Screenshot](/images/redcap-guide/image3.png)

### 7.2 Deleting a field /s

The user may decide to delete certain fields on an instrument depending on what fields they need to use in a study. The following is a step-by-step guide on how to delete fields in REDCap. This example shows how to delete a field under demographics core instrument.

![Screenshot](/images/redcap-guide/image1.png)

The instrument will open showing all the fields within that instrument. For this example, we are deleting the “native language field”.

![Screenshot](/images/redcap-guide/image7.png)

A pop-up window will appear prompting the user to confirm the deletion. Click the “delete” to confirm the action.

![Screenshot](/images/redcap-guide/image4.png)

![Screenshot](/images/redcap-guide/image8.png)

## 8. Getting help with REDCap Toolkit deployment

For help deploying the toolkits, refer back to this guide or contact us:

- [AfriGen-D Helpdesk](https://helpdesk.afrigen-d.org/helpdesk/): log a ticket under the Phenotype Standards queue
- [GitHub Issues](https://github.com/AfriGen-D/Phenotype_Collection_Toolkits/issues): report a problem with a toolkit

See the [Support](/support) page for more options.
