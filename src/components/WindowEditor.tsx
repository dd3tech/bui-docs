import { composeClasses } from 'dd360-ds/lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const cardMetricsString = `import React from 'react';
import { Container, Card, Text, Divider } from 'dd360-ds'

const CardMetrics = () => {
	return (
		<Card rounded='lg' padding={5}>
			<Container>
				<Text size={{ xl: '2xl', sm: 'xl' }}>Metrics</Text>
			</Container>
			<Divider />
			<Text variant='p'>The summary of this month's expensive</Text>
			<Text variant='small'>700</Text>
		</Card>
	)
}`

interface EditorProps {
    codeString?: string
    language?: 'tsx' | 'jsx' | 'md' | 'mdx'
    className?: string
    style?: React.CSSProperties
    header?: { show: boolean; title: string }
}

function WindowEditor({ codeString = cardMetricsString, language = 'tsx', className, header, style }: EditorProps) {
    return (
        <div className={composeClasses('h-auto bg-gray-900 rounded-lg overflow-hidden mt-2 mb-10', className)}>
            {header?.show && (
                <nav className="flex items-center px-3 pt-2 gap-3 bg-gray-800">
                    <div className="flex items-center gap-2">
                        <button className="h-3 w-3 bg-red-400 rounded-full"></button>
                        <button className="h-3 w-3 bg-yellow-400 rounded-full"></button>
                        <button className="h-3 w-3 bg-green-400 rounded-full"></button>
                    </div>
                    <div className="bg-gray-900 rounded-t-xl h-full px-3 py-1">
                        <h3 className="text-white font-medium">{header?.title}</h3>
                    </div>
                </nav>
            )}
            <SyntaxHighlighter wrapLines language={language} style={{ ...nightOwl }} customStyle={{ margin: 0, ...style }} showLineNumbers>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default WindowEditor
