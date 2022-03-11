import React from 'react'
import { Container, makeStyles, Grid, Typography } from '@material-ui/core'
import Post from '../components/PageContent' 

const useStyle = makeStyles((theme) => ({
  container: {
  },
  feedTitleBox: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    backgroundColor: "#5463FF",
    height: theme.spacing(5),
    color: "white",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))
function Dogs() {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Container>
        <Grid container rowspacing={1} direction='row' justifyContent='center' alignItems='center'>
          <Post 
            title="Dog 1"
            image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium! Fugiat magni rem suscipit aspernatur expedita consectetur mollitia, vitae velit in a numquam sequi fuga officia commodi doloremque laborum provident." 
            />
            <Post 
            title="Dog 2"
            image="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/05-14/How+Do+Dogs+Get+Hernias+_+ASPCA+Pet+Insurance+_+shiba+inu+with+an+orange+collar+resting+on+a+tan+chair-min.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium! Fugiat magni rem suscipit aspernatur expedita consectetur mollitia, vitae velit in a numquam sequi fuga officia commodi doloremque laborum provident." 
            />
            <Post 
            title="Dog 3"
            image="https://images.newscientist.com/wp-content/uploads/2021/07/20164548/gettyimages-171117216_web.jpg?crop=16:9,smart&width=1200&height=675&upscale=true"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium! Fugiat magni rem suscipit aspernatur expedita consectetur mollitia, vitae velit in a numquam sequi fuga officia commodi doloremque laborum provident." 
            />
            <Post 
            title="Dog 4"
            image="https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium! Fugiat magni rem suscipit aspernatur expedita consectetur mollitia, vitae velit in a numquam sequi fuga officia commodi doloremque laborum provident." 
            />
        </Grid>
      </Container>
    </Container>
  )
}

export default Dogs