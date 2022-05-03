/* eslint-disable no-unused-vars */
import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
} from '@chakra-ui/react';
import hero from '../../images/hero';
import Lottie from 'react-lottie';

const Header = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: hero,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <Container maxW='7xl' as='main'>

                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'>

                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, purple.500, blue.600)"
                            bgClip="text">
                            If You Want To Get a Job , Get A Resume
                        </Heading>

                        <Text color={'gray.600'} lineHeight={1.7} style={{ fontFamily: 'Poppins' }}>
                            Resume generator is a tool that often constitutes an automated process in which you follow a template and input your information. Ability to build, print, and download your resume for free in minutes.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'purple'}
                            >
                                Build Resume
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'400px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Lottie
                                options={defaultOptions}
                            />
                        </Box>
                    </Flex>
                </Stack>

            </Container>
        </>
    )
}

export default Header
