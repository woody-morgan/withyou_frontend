import { buttonSettings } from '@src/animations/common'
import { Icon } from '@src/components/common'
import { profileOptionItemData, ProfileOptionItemType } from '@src/core/data/profile-data'
import cx from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'

const OptionItem: FC<ProfileOptionItemType> = ({ icon, title, url }) => {
  return (
    <Link href={url}>
      <motion.div
        {...buttonSettings}
        className={cx('relative w-full h-20', 'flex items-center', 'space-x-2')}
      >
        <div className="bg-primary-400 p-2 rounded-lg text-red-600">
          <Icon name={icon} size={28} />
        </div>
        <h3>{title}</h3>
        <Icon className="absolute right-0" size={28} name="rightArrow" />
      </motion.div>
    </Link>
  )
}

const ProfileOptionItemsSection = () => {
  return (
    <div className="h-[calc(100%-280px)] overflow-y-scroll">
      {profileOptionItemData.map((item, index) => (
        <OptionItem key={`profile-option-item-${index}`} {...item} />
      ))}
    </div>
  )
}

export default ProfileOptionItemsSection
