import * as React from 'react'
import { Row } from './data'

const Component: React.FC<Row> = props => (
    <tr>
        <th>{props.age}</th>
        {props.answers.map((answer,i)=>(
            <td key={i}>{(answer == null) ? '' : `${(answer * 100)}`}%</td>
        ))}
    </tr>
)
export default Component
