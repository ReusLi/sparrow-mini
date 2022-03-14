import * as React from 'react';

export type ButtonReusProps = {
    type: String;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<ButtonReusProps & React.RefAttributes<HTMLElement>> {
    __ANT_BUTTON: boolean;
}


const myReducer = (state: any, action: any) => {
    switch (action.type) {
        case "reset":
            return { count: 0 };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}
type MyContext = {
    state?: any;
    dispatch?: any;
}
const myContext = React.createContext<MyContext>({});

const ContextProvider = (props: any) => {
    const [state, dispatch] = React.useReducer(myReducer, { count: 2 });
    return (
        <myContext.Provider value={{ state, dispatch }}>
            {props.children}
        </myContext.Provider>
    );
};

function Counter() {
    const { state, dispatch } = React.useContext(myContext);
    return (
        <div>
            Counter Count: {state.count}
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

function CounterTest() {
    const { state, dispatch } = React.useContext(myContext);
    return (
        <div>
            CounterTest Count: {state.count}
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonReusProps> = (props, ref) => {
    return (
        <div className="App">
            <ContextProvider>
                <Counter />
                <CounterTest />
            </ContextProvider>
        </div>
    )
};

const Button = React.forwardRef<unknown, ButtonReusProps>(InternalButton) as CompoundedComponent;

type TestA = {
    a: number;
    b: number;
}
type TestB = {
    c: number;
}
type Test = {
    a: number;
    b: number;
} & Omit<TestB, 'c1'>;

const obj: Test = {
    a: 1,
    b: 1,
    c: 1
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
  } & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

const ooo: AnchorButtonProps = {
    href: '1',
    media: 's'
}

export default Button;