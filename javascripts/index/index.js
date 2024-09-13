import {
    indexPageConfig
} from "../../../config/index.config.js";
import {
    elementPopulator,
    fetchData,
    populateSocialContainer
} from "../global.js";
import {
    blogCard
} from "./components/blog.html.js";
import { designCard } from "./components/design.html.js";
function populateMeetUs() {
    try {
        elementPopulator(".MeetUs-Heading", indexPageConfig.sections.meetUs.heading)
        elementPopulator(".MeetUs-Subheading", indexPageConfig.sections.meetUs.subHeading)
        elementPopulator(".Meetus-Paragraph", indexPageConfig.sections.meetUs.paragraph)
    } catch (error) {
        console.error(error)
    }
}

function populateDesign() {
    try {
        elementPopulator(".Design-Heading", indexPageConfig.sections.design.heading)
        elementPopulator(".Design-Subheading", indexPageConfig.sections.design.subHeading)
    } catch (error) {
        console.error(error)
    }
}

function populateBlog() {
    try {
        elementPopulator(".Blog-Heading", indexPageConfig.sections.blog.heading)
        elementPopulator(".Blog-Subheading", indexPageConfig.sections.blog.subHeading)
    } catch (error) {
        console.error(error)
    }
}

async function populateBlogCards() {
    const blogs = await fetchData("/data/blog.json")
    let blogElement = ``
    for (const blog of blogs) {
        blogElement += blogCard(blog.title, blog.summary, blog.date, blog.image, blog.url)
    }
    const blogCardsContainer = document.querySelector(".Blog-Cards-Container")
    blogCardsContainer.insertAdjacentHTML("afterbegin", blogElement)
}

async function populateDesignCards() {
    const designs = await fetchData("/data/design.json")
    let designElement = ``
    for (const design of designs) {
        designElement += designCard(design.title, design.image, design.likes, design.url)
    }
    const designCardsContainer = document.querySelector(".Design-Cards-Container")
    
    designCardsContainer.insertAdjacentHTML("afterbegin", designElement)
}

populateMeetUs()
populateDesign()
populateBlog()
populateDesignCards()
populateBlogCards()
populateSocialContainer()