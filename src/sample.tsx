import * as React from 'react'
type Props = {
    children?: React.ReactNode
}

const Child: React.FC = props => (
    <div onClick={Hoge}>
        {props.children}
    </div>
)

const Parent: React.FC<{ childLabel: string }> = props => (
    <Child>
        {props.childLabel}
    </Child>
)

const Hoge = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

}

const Fuga : React.FunctionComponent = () => {
    const [count, setCount] = React.useState({
        n: 1,
        m: "i"
    })

    const double = React.useMemo(() => count.n * 2, [count.n])

    const onClick = React.useCallback(() => {
        setCount((prev) => ({
            n: prev.n + 1,
            m: prev.m + "h"
        }))
    }, [])

    const onClick2 = () => {
        setCount((prev) => ({
            n: prev.n + 1,
            m: prev.m + "h"
        }))
    }

    return <button onClick={onClick}/>
}

export default Parent
