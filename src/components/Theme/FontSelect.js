import React from 'react'
import { useResume } from '../../Context';
import FontOption from './FontOption'
import { HStack, useRadioGroup } from '@chakra-ui/react'


const FontSelect = () => {
    const options = ['Roboto', 'Poppins', 'Poor Story', 'Kolker Brush', 'Lato']

    const { font, setFont } = useResume();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'font',
        value: font,
        onChange: setFont,
    })

    const group = getRootProps()

    return (
        <HStack {...group}>
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <FontOption key={value} {...radio}>
                        {value}
                    </FontOption>
                )
            })}
        </HStack>
    )
}

export default FontSelect