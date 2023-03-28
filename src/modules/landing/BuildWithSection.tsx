import { ImageIcon, Text } from 'dd360-ds'

const BuildWithSection = () => (
    <section className="flex flex-col items-center justify-center w-full" style={{ marginTop: 122 }}>
        <Text size="xl" className="font-semibold mb-9">
            Built with:
        </Text>
        <div className="flex gap-20 items-center">
            <ImageIcon src="/tailwind-logo-name.svg" style={{ height: 21, width: '168px' }} />
            <ImageIcon src="/react-logo-name.svg" style={{ height: 25, width: 'auto' }} />
        </div>
    </section>
)

export default BuildWithSection
