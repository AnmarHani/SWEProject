import Loading from '../../../components/Loading'
import {useGetUserContents} from '../../../hooks/api/contents/useGetUserContents'
import CustomLink from '../../../components/CustomLink'
import Text from '../../../components/Text'
import ContainerCardList from '../../../components/containers/ContainerCardList'
import Row from '../../../components/Row'
import Card from '../../../components/cards/Card'

const Dashboard = (props) => {
  let contents = [];
  let customLinkStyles = {
      display: "flex",
      justifyContent: "center",
  }
  const { isLoading, isError, error, data } = useGetUserContents(props.user._id)

  if (isLoading) {
    return <Loading />
  }
  if (!isLoading) {
    contents = data.data.contents
    console.log(contents)
  }
  return (
    <>
      <Text position="center" size="medium">جميع المنشورات الخاصة بك </Text>
      <CustomLink parent={{style: customLinkStyles}} to="/contents/create">انشاء منشور جديد</CustomLink>
      <ContainerCardList>
        <Row noChildrenMessage="لا يوجد لديك اي منشور">
          {contents?.map(content => (
              <Card key={content._id} link={content._id} title={content.title} description={content.body.text}/>
          ))}
        </Row>
      </ContainerCardList>
    </>
  )
}

export default Dashboard