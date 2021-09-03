import State from './State'
export default class StateMachine {

    private states: State[] = [];
    
    private curState: string;
    
    constructor(initialState: State) {
        this.curState = initialState.name;
        this.addState(initialState)
    }
    
    public addState(newState: State): void {
        const size = this.states.length;
        this.states[size] = newState;
    }
    
    public exec(input: string) {
        for(const state of this.states){
            if(state.name === this.curState) {
                for(const transition of state.transitionTable) {
                    if(transition.input === input) {
                        this.curState = transition.callback()
                    }
                }
            }
        }
    }
}