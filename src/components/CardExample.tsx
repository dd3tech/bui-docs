import { Button, Card, Text } from 'dd360-ds'
import { StyleObject } from 'dd360-ds/lib'

const CardExample = ({ style, className }: { style: StyleObject; className: string }) => (
    <Card padding={0} rounded="md" width={250} style={style} className={className}>
        <div className="pt-4 px-4">
            <Text bold className="mb-7" variant="h5">
                Hello World
            </Text>
            <Text className="text-sm">Información sobre el resumen de las viviendas y valor del proyecto.</Text>
        </div>
        <div className="w-full border-t my-6" />
        <div className="px-4 pb-4">
            <Button className="text-xs font-bold w-full" variant="secondary">
                Ver detalle
            </Button>
        </div>
    </Card>
)

export default CardExample
