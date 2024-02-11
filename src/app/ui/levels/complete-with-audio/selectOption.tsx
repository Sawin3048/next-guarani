import MicrofoneButton from '../microfoneButton'
import { useCompleteWithAudio } from './context'
import ProgressBar from '../progress-bar'
import clsx from 'clsx'
import useRecordAudio from './useRecordAudio'


function SelectOption() {
  const levelStore = useCompleteWithAudio()
  const {toggleRecord} = useRecordAudio()

  return (<>
    <div className={clsx({
      "opacity-25": levelStore.transcripting
    })}>
      <h4 className='text-center text-neutral-600 mb-2'>Habla lento y claro</h4>
      <div className='w-36 m-auto'>
        <div className="flex justify-center">
        <MicrofoneButton callback={() => { toggleRecord() }} record={levelStore.recording} />
        </div>
        <div className='mt-2'>
          <ProgressBar
            percentage={`${levelStore.recording ? 100 : 0}%`}
            duration={`${levelStore.recording ? '7000ms' : '0ms'}`}
          />
        </div>
      </div>
    </div>
  </>
  )
}


export default SelectOption