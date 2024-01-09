"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { CodeBracketIcon } from "@heroicons/react/24/solid"
import { EyeIcon } from "@heroicons/react/24/solid"

import ModalCard from "../ModalCard/ModalCard.component"

import styles from "./ProjectCard.module.scss"

type ProjectCardProps = {
  backgroundText: string
  brandColor: string
  coverImage: string
  futureUseText?: string
  github?: {
    display: boolean
    url: string
  }
  skills?: string[]
  text: string
  title: string
  website: {
    display: boolean
    url: string
  }
}

export default function ProjectCard({
  backgroundText,
  brandColor,
  coverImage,
  futureUseText,
  github,
  skills,
  text,
  title,
  website
}: ProjectCardProps) {
  return (
    <div
      className={`relative px-3.5 ${styles.card}`}
    >
      <div className="mb-7">
        <div
          className={`block rounded-t-lg py-2.5 px-4 text-center uppercase font-medium ${styles.header}`}
          style={{ backgroundColor: `${brandColor}` }}
        >
          {title}
        </div>
        <div className="relative">
          <Image
            alt=""
            height={500}
            loading="lazy"
            src={coverImage}
            width={767}
          />
          <div
            className={`absolute top-0 w-full h-full z-10 ${styles.overlay}`}
          />
          <div
            className={`flex absolute items-center justify-center top-0 w-full h-full px-4 z-10 ${styles.details}`}
          >
            <p
              className={`text-center z-20 ${styles.copy}`}
            >
              {text}
            </p>
            <span
              className={`block w-0 h-px mt-2.5 ${styles.line}`}
            />
          </div>
        </div>
        <div
          className="flex justify-between py-2.5 border-b border-solid"
          style={{ borderColor: `${brandColor}` }}
        >
          <div className="flex justify-between w-full">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className={`uppercase p-2.5 rounded-lg ${styles.button}`}
                  style={{ color: `${brandColor}` }}
                >
                  Project Info
                </button>
              </Dialog.Trigger>
              <ModalCard
                backgroundText={backgroundText}
                futureUseText={futureUseText}
                modalLink={website.url}
                modalTitle={title}
                skills={skills}
              />
            </Dialog.Root>
            <div className="flex">
              {github && github.url && (
                <Link
                  aria-label="Github project profile page"
                  className={styles.iconLink}
                  href={github.url}
                  rel="noopener"
                  target="_blank"
                >
                  <CodeBracketIcon
                    className="w-8 h-8"
                    style={{ fill: `${brandColor}` }}
                  />
                </Link>
              )}
              {website && website.url && (
                <Link
                  aria-label={`${title} page URL`}
                  className={styles.iconLink}
                  href={website.url}
                  rel="noopener"
                  target="_blank"
                >
                  <EyeIcon
                    className="w-8 h-8"
                    style={{ fill: `${brandColor}` }}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
