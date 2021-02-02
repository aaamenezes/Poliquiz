import Widget from '../Widget'
import db from '../../../db.json'

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando perguntas...
      </Widget.Header>
      <Widget.Image>
        <img src={db.loading} />
      </Widget.Image>
    </Widget>
  )
}