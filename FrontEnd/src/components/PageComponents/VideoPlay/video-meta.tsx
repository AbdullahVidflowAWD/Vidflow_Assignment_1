"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { BellPlus, MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from "lucide-react"

export function VideoMeta({
  channel,
  likes,
  className,
}: {
  channel: {
    name: string
    avatar: string
    subscribers: string
    isSubscribed?: boolean
  }
  likes: number
  className?: string
}) {
  const [subscribed, setSubscribed] = React.useState<boolean>(Boolean(channel.isSubscribed))
  const [likeCount, setLikeCount] = React.useState<number>(likes)
  const [liked, setLiked] = React.useState<boolean>(false)
  const [disliked, setDisliked] = React.useState<boolean>(false)

  function toggleLike() {
    if (liked) {
      setLiked(false)
      setLikeCount((c) => Math.max(0, c - 1))
    } else {
      setLiked(true)
      if (disliked) setDisliked(false)
      setLikeCount((c) => c + 1)
    }
  }

  function toggleDislike() {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikeCount((c) => Math.max(0, c - 1))
      }
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border p-3 md:flex-row md:items-center md:justify-between",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={channel.avatar || "/placeholder.svg"} alt={`${channel.name} avatar`} />
          <AvatarFallback>
            {channel.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate font-medium leading-tight">{channel.name}</p>
          <p className="text-xs text-muted-foreground">{channel.subscribers} subscribers</p>
        </div>

        <div className="ml-1 flex items-center gap-2">
          <Separator orientation="vertical" className="hidden h-6 md:block" />
          <Button size="sm" onClick={() => setSubscribed((s) => !s)} aria-pressed={subscribed}>
            {subscribed ? "Subscribed" : "Subscribe"}
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="hidden h-8 w-8 md:inline-flex bg-transparent"
            aria-label="Notify me"
            title="Notify me"
          >
            <BellPlus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center overflow-hidden rounded-lg border">
          <Button
            variant={liked ? "default" : "ghost"}
            className="h-9 rounded-none px-3"
            onClick={toggleLike}
            aria-pressed={liked}
            aria-label="Like"
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            <span className="tabular-nums">{likeCount.toLocaleString()}</span>
          </Button>
          <Separator orientation="vertical" />
          <Button
            variant={disliked ? "default" : "ghost"}
            className="h-9 rounded-none px-3"
            onClick={toggleDislike}
            aria-pressed={disliked}
            aria-label="Dislike"
          >
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" className="h-9 bg-transparent">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save to playlist</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
