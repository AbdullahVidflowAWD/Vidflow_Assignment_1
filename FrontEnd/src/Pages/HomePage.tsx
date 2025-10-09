import VideoCard from "@/components/PageComponents/Video-Card"

const videos = [
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "8:59:29",
    title: "Learn Blender in Hindi — Full Course 2025",
    channel: "CG Aman",
    views: "487K views",
    timeAgo: "8 months ago",
    verified: true,
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "2:15:07",
    title: "Unreal Engine 5 Full Game Dev Course",
    channel: "DevVision",
    views: "152K views",
    timeAgo: "3 months ago",
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "2:15:07",
    title: "Unreal Engine 5 Full Game Dev Course",
    channel: "DevVision",
    views: "152K views",
    timeAgo: "3 months ago",
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "2:15:07",
    title: "Unreal Engine 5 Full Game Dev Course",
    channel: "DevVision",
    views: "152K views",
    timeAgo: "3 months ago",
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "2:15:07",
    title: "Unreal Engine 5 Full Game Dev Course",
    channel: "DevVision",
    views: "152K views",
    timeAgo: "3 months ago",
  },
  {
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/041/880/991/small_2x/ai-generated-pic-artistic-depiction-of-sunflowers-under-a-vast-cloudy-sky-photo.jpg",
    duration: "2:15:07",
    title: "Unreal Engine 5 Full Game Dev Course",
    channel: "DevVision",
    views: "152K views",
    timeAgo: "3 months ago",
  },
]

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video, i) => (
        <VideoCard key={i} {...video} />
      ))}
    </div>
  )
}
