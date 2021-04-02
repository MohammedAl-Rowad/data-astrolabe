import React from 'react'
import { Header } from '@components'
import { Flex } from '@chakra-ui/react'
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from '@projectstorm/react-diagrams'

import { CanvasWidget } from '@projectstorm/react-canvas-core'

const engine = createEngine()

const model = new DiagramModel()

const node1 = new DefaultNodeModel({
  name: 'Users Model',
  color: '#023E5B',
})
node1.setPosition(100, 100)
const port1 = node1.addOutPort('id')

const node2 = new DefaultNodeModel('Posts Model', '#023E5B')
const port2 = node2.addInPort('id')
node2.addInPort('body')
node2.setPosition(400, 100)

const node3 = new DefaultNodeModel('Comment Model', '#023E5B')
node3.addInPort('id')
node3.addInPort('body')
node3.setPosition(100, 200)

const link1 = port1.link<DefaultLinkModel>(port2)
link1.getOptions().testName = 'Test'

model.addAll(node1, node2, node3, link1)

engine.setModel(model)

const App = () => {
  return (
    <>
      <Flex flex="1">
        <Header />
      </Flex>
      <Flex flex="1">
        <CanvasWidget engine={engine} className="canvas" />
      </Flex>
    </>
  )
}

export default App
