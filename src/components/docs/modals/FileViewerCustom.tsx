import { useState } from 'react'
import { FileViewer, Button } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const FileViewerCustom = () => {
  const [activeFileViewer, setActiveFileViewer] = useState<boolean>(false)
  return (
    <>
      <div>
        <div className="flex gap-2">
          <Button
            className="flex gap-2"
            onClick={() => setActiveFileViewer(true)}
          >
            <div>
              <DynamicHeroIcon icon="EyeIcon" className="h-5 w-5" />
            </div>
            View File
          </Button>
        </div>
        {activeFileViewer && (
          <FileViewer>
            <DynamicHeroIcon icon="DownloadIcon" className="h-5 w-5" />
            <FileViewer.ViewerActions fileName={'Eloquent_JavaScript.pdf'}>
              <FileViewer.BtnAction
                icon={
                  <DynamicHeroIcon icon="DownloadIcon" className="h-5 w-5" />
                }
                onClick={() => alert('Demo Download')}
              />
              <FileViewer.BtnAction
                icon={<DynamicHeroIcon icon="XIcon" className="h-5 w-5" />}
                onClick={() => setActiveFileViewer(false)}
              />
            </FileViewer.ViewerActions>
            <FileViewer.FileContent
              url={'https://eloquentjs-es.thedojo.mx/Eloquent_JavaScript.pdf'}
              fileType={'pdf'}
            />
          </FileViewer>
        )}
      </div>
    </>
  )
}

export default FileViewerCustom
