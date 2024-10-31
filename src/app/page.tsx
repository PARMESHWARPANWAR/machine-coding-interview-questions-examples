// src/app/page.tsx
import Link from 'next/link';

const challenges = [
  {
    day: 1,
    title: "Accordion Component",
    path: "/day1-accordion",
    description: "Single-level accordion with smooth animations"
  },
  {
    day: 2,
    title: "Nested Comments",
    path: "/day2-comments",
    description: "Infinitely nested comment system"
  },
  {
    day: 3,
    title: "Image Slider",
    path: "/day3-image-slider",
    description: "Basic Image Slider"
  },
  {
    day: 4,
    title: "Infinite Scroll",
    path: "/day4-infinite-scroll",
    description: "Infinite Scroll"
  },
  {
    day: 5,
    title: 'Shimmer UI',
    path: '/day5-shimmer-ui',
    description: 'Shimmer UI'
  },
  {
    day: 6,
    title: 'Kanban Board',
    path: '/day6-kanban-board',
    description: 'Kanban Board'
  },
  {
    day:7,
    title:'File Explorer',
    path:'/day7-file-explorer',
    description:'File Explorer'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Frontend Machine Coding Challenge
        </h1>
        <p className="text-gray-600">
          10 Days of Common Frontend Interview Questions
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Link
            key={challenge.day}
            href={challenge.path}
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">
                Day {challenge.day}: {challenge.title}
              </h2>
            </div>
            <p className="text-gray-600">{challenge.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}