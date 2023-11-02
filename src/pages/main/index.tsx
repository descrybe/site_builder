import { FC } from 'react'
import PageHeader from '../../pagesComponent/pageHeader';

const MainPage: FC = () => {
  return (
    <>
    {/* TODO: перенести контент в отдельный файл вместе с шапкой */}
      <PageHeader />
      <div>This is the main page</div>
    </>
  )
}

export default MainPage;