import { Card, Container, Divider, Text } from 'dd360-ds'
import Image from 'next/image'
import WindowEditor from './WindowEditor'

const WindowEditorSection = () => (
    <section className="relative pb-80 flex flex-wrap items-center justify-center">
        <div className="relative" style={{ width: 544 }}>
            <WindowEditor className="w-full rounded-2xl" style={{ overflow: 'hidden' }} />
            <Card rounded="lg" padding={5} className="absolute bg-white" style={{ bottom: -61, right: -77 }}>
                <Container>
                    <Text size={{ xl: '2xl', sm: 'xl' }}>Metrics</Text>
                </Container>
                <Divider />
                <Text variant="p">The summary of this months expensive</Text>
                <Text variant="small">700</Text>
            </Card>
        </div>

        <div className="w-96 ml-36 my-32">
            <Text size="xl" className="font-semibold">
                Some examples of our components
            </Text>
            <Text size="base" variant="p" className="mt-9">
                Get more than 20 components with beautiful defaults and simple props. From charts to input and layout elements, we covered all the essential
                components to lift the tedious front-end work from your shoulders. Get ahead with our simple API approach in no time.
            </Text>
        </div>
        <img alt="looper-variant-3" src="/looper-variant-3.svg" className="absolute right-0" style={{ zIndex: -20, bottom: -197 }} />
    </section>
)

export default WindowEditorSection
