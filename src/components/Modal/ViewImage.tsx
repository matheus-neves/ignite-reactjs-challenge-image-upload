import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import React from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent maxWidth="900px" maxHeight="600px">
        <ModalCloseButton />
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            width="100%"
          />
        </ModalBody>
        <ModalFooter
          backgroundColor="gray.800"
          py={1}
          px="10px"
          justifyContent="flex-start"
          borderBottomRightRadius="6px"
          borderBottomLeftRadius="6px">
          <Link href={imgUrl} isExternal fontSize="14px" color="gray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
