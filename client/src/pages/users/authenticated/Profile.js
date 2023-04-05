import { useParams } from "react-router-dom"
import {useGetProfile} from "../../../hooks/api/users/useGetProfile"
import Container from "../../../components/containers/Container"
import Row from "../../../components/Row"
import Text from "../../../components/Text"
import Icon from "../../../components/Icon"
import Loading from "../../../components/Loading"
import Border from '../../../components/Border';
import Button from "../../../components/Button";
import CustomLink from "../../../components/CustomLink";
import Tag from "../../../components/Tag";




const Profile = (props) => {
    let { id } = useParams();
    let user;
    let customTextStyles = {
        marginBottom: "1em",
    }
    let customDivStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5em"
    }
    let customTopDivStyles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1.5em",
    }
    const { isLoading, isError, error, data, refetch } = useGetProfile(id)
    
    if(isLoading){
        return <Loading />
    }
    if(!isLoading){
        user = data.data.user
    }
    return (
        <>
                <Text position="center" style={customTextStyles} type="title" size="medium">معلومات الحساب</Text>
            <div style={customDivStyles}>
                <div style={customTopDivStyles}>
                    {user.isAdmin && <Tag>مشرف</Tag>}
                    {props.user._id === id && <CustomLink to={`/users/update`}>تعديل الحساب</CustomLink>}
                </div>
                <Text style={customTextStyles} type="title" size="small">
                    {
                        user.personalInformation.name === "" 
                        ? "بلا اسم" 
                        : user.personalInformation.name
                    }
                </Text>
                <Text type="description" size="small">
                    {
                        user.personalInformation.description === "" 
                        ? "بلا وصف" 
                        : user.personalInformation.description
                    }
                </Text>
            </div>
            <Border />
        </>
    )
}

export default Profile