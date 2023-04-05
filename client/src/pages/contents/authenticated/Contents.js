import Row from '../../../components/Row'
import {useGetAllContents} from '../../../hooks/api/contents/useGetAllContents'
import Loading from '../../../components/Loading'
import Card from '../../../components/cards/Card'
import ContainerCardList from '../../../components/containers/ContainerCardList'
import Text from '../../../components/Text';


const Contents = (props) => {
  let contents;
  const { isLoading, isError, error, data } = useGetAllContents()

  if (isLoading) {
    return <Loading />
  }
  if (!isLoading) {
    contents = data.data.contents
    console.log(contents
      )
  }

  return (
    <>
      <Text position="center" size="extra-large">جميع المنشورات </Text>
      <ContainerCardList>
        <Row>
          {contents?.map(content => (
            <Card 
              key={content._id} 
              link={content._id} 
              title={content.title} 
              description={content.body.text}
              date={content.createdAt.toString()}
              submittions={content.submit.length}
            />
          ))}
        </Row>
      </ContainerCardList>
    </>
  )
}

export default Contents