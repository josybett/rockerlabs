export interface IAppStore{
    analitycs: String;
    news: String;
    board: String;
    briefcase: String;
}

export const INITIAL_STATE: IAppStore = {
    analitycs: 'nav-link active',
    news: 'nav-link',
    board: 'nav-link',
    briefcase: 'nav-link'
}

export function appReducer(state: IAppStore, action): IAppStore {
    switch(action.type){        
        case 'ANALITYCS':
            return {
                analitycs: 'nav-link active',
                news: 'nav-link',
                board: 'nav-link',
                briefcase: 'nav-link'
            };
        
        case 'NEWS': 
            return {
                analitycs: 'nav-link',
                news: 'nav-link active',
                board: 'nav-link',
                briefcase: 'nav-link'
            }
    }
    return state;
}