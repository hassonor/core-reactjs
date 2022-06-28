import {FC, createContext, useState, useEffect, ReactElement, useCallback} from 'react';
import axios from 'axios';

export type TIssue = {
    number: number
    title: string
    url: string
    state: string
}

interface IIssue_Context {
    issues: TIssue[]
    url: string
}

interface Props {
    children: ReactElement
    url: string
}

export const IssueContext = createContext<IIssue_Context>({
    issues: [],
    url: ''
})

const IssueProvider: FC<Props> = ({children, url}): ReactElement => {
    // State
    const [issues, setIssues] = useState<TIssue[]>([])

    const fetchIssues = useCallback(async () => {
        const response = await axios(url)

        if (response) {
            setIssues(response.data)
        }
    }, [url])

    // Effects
    useEffect(() => {
        fetchIssues()
    }, [fetchIssues])

    const context = {
        issues,
        url
    }

    return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
}

export default IssueProvider

