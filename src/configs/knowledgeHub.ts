import { knowledgeHubImages } from '@resources/knowledgeHub'
import { strings } from '@strings/strings'

const copy = strings.knowledgeHub
const articles = copy.articles

export type KnowledgeHubArticle = {
  id: string
  tag: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const knowledgeHubConfig = {
  eyebrow: copy.eyebrow,
  heading: copy.heading,
  viewAll: copy.viewAll,
  readMore: copy.readMore,
  viewAllHref: '/products',
  articles: [
    {
      id: 'cold-care',
      tag: articles.coldCare.tag,
      title: articles.coldCare.title,
      description: articles.coldCare.description,
      image: knowledgeHubImages.coldCare,
      imageAlt: articles.coldCare.title,
    },
    {
      id: 'nasal-congestion',
      tag: articles.nasalCongestion.tag,
      title: articles.nasalCongestion.title,
      description: articles.nasalCongestion.description,
      image: knowledgeHubImages.nasalCongestion,
      imageAlt: articles.nasalCongestion.title,
    },
    {
      id: 'sleep-care',
      tag: articles.sleepCare.tag,
      title: articles.sleepCare.title,
      description: articles.sleepCare.description,
      image: knowledgeHubImages.sleepCare,
      imageAlt: articles.sleepCare.title,
    },
    {
      id: 'kids-health',
      tag: articles.kidsHealth.tag,
      title: articles.kidsHealth.title,
      description: articles.kidsHealth.description,
      image: knowledgeHubImages.kidsHealth,
      imageAlt: articles.kidsHealth.title,
    },
  ] satisfies KnowledgeHubArticle[],
} as const
