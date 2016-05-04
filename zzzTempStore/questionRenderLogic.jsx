
    var question = this.state.currentUser.unanswered[0];
    var count = 20 - this.state.currentUser.unanswered.count;
    var questionRender = (<QuestionIndexItem className="question-text"
                                             key={question.id}
                                             content={question.content} />);
