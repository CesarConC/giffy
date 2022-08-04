
import { useEffect, useRef } from "react";

export default function useTitle ({title}) {
    const prevTitle = useRef(document.title)
    console.log('aaaa')
    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = title != '' ? title : 'Giffy'

        return () => document.title = previousTitle
    }, [title])
    
} 