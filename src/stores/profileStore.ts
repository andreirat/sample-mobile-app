import { atom } from 'jotai';
import { PageProfile } from '../types/place';

export const profileDataAtom = atom<PageProfile | null>(null);
