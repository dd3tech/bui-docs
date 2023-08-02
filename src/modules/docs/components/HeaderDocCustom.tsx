import { Anchor, Flex, Text } from 'dd360-ds'
import {
  LinkIcon
} from '@heroicons/react/solid'


interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  name: string;
}

const titleProps: TitleProps = {
  name: "floating-nav",
};

const HeaderDocCustom = ({ title, url }: {
  title: string,
  url?: string
}) => {

  return (
    <Flex alignItems='center' justifyContent='between' gap="2" className='flex-row flex-wrap w-full' >
      <h1 {...titleProps}>{title}</h1>
      {url &&
        <Anchor
          to={url}
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
