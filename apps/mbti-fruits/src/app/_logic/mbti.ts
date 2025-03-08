import { MBTIType, MBTIResult } from '../_types';

export function calculateMBTI(scores: Record<MBTIType, number>): MBTIResult {
  const mbti = [
    scores['E'] > scores['I'] ? 'E' : 'I',
    scores['S'] > scores['N'] ? 'S' : 'N',
    scores['T'] > scores['F'] ? 'T' : 'F',
    scores['J'] > scores['P'] ? 'J' : 'P'
  ].join('') as MBTIResult;
  
  return mbti;
}