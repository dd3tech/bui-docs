import { GetServerSideProps } from 'next'

export default function Docs() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/docs/navigation/tabs',
      permanent: false
    }
  }
}
