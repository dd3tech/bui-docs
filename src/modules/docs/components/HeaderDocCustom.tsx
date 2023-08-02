import { HTMLAttributes } from 'react';
import { Anchor, Flex, Text } from 'dd360-ds'
import {
  LinkIcon
} from '@heroicons/react/solid'


interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  name: string;
}

const titleProps: TitleProps = {
  name: "floating-nav",
};

const BASE_URL = "https://main--62ffec7466615c40c8dbe435.chromatic.com/?path=/story/"

const HeaderDocCustom = ({ title, pathUrl }: {
  title: string,
  pathUrl?: string
}) => {

  return (
    <Flex alignItems='center' justifyContent='between' gap="2" className='flex-row flex-wrap w-full' >
      <h1 {...titleProps}>{title}</h1>
      {pathUrl &&
        <Anchor
          to={`${BASE_URL}${pathUrl}`}
          aria-label={`Link to ${title} storybook`}
          className="no-underline hover:underline text-blue-400 hover:text-blue-500"
          rel="noopener noreferrer"
          target="_blank"
          title={`Go to the ${title} storybook`}
        >
          <Flex justifyContent="center" alignItems="center" className="flex-row flex-nowrap" gap="1">
            <Text
              bold
              size="sm"
            >
              Storybook
            </Text>
            <LinkIcon className="w-3 h-3" />
          </Flex>
        </Anchor>
      }
    </Flex>
  )
}

export default HeaderDocCustom
