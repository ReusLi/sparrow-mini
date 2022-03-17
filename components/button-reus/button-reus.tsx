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

type ShowLoading = {
    show?: boolean;
    setLoading?: any;
}
const myContext = React.createContext<MyContext>({});
const loadingContext = React.createContext<ShowLoading>({});
const ContextProvider = (props: any) => {
    const [state, dispatch] = React.useReducer(myReducer, {
        count: 2,
        loading: false
    });
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

function LoadingIcon() {
    return (
        <span className="ant-btn-loading-icon">
            <span role="img" aria-label="loading" className="anticon anticon-loading anticon-spin">
                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
                    </path>
                </svg>
            </span>
        </span>
    )
}

const Hello = (props: any) => {
    return (
        <p>Greetings</p>
    );
}

const Wrapper = (config: any) => {
    return (CompA: any) => {
        return (Prop: any) => {
            return <CompA></CompA>
        }
    }
}


function CounterTest(props: any) {
    const { state, dispatch } = React.useContext(myContext);
    // const { show, setLoading } = React.useContext(loadingContext);
    const [ show, setLoading ] = React.useState(false);
    return (
        <div>
            CounterTest Count: {state.count}
            <button>
                {
                    show ? <LoadingIcon></LoadingIcon> : ''
                }
            </button>
            <button onClick={() => setLoading(!show)}>Reset</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonReusProps> = (props, ref) => {
    const TestVB = Wrapper({name: 'yfbill', age: 20})(Hello);
    return (
        <div className="App">
            <ContextProvider>
                <Counter></Counter>
                <CounterTest />
                <TestVB />
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